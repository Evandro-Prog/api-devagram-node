import { createBucketClient } from '@cosmicjs/sdk';
import multer from 'multer';



const { BUCKET_SLUG, READ_KEY, WRITE_KEY } = process.env;

const bucketClient = createBucketClient({
    bucketSlug: BUCKET_SLUG as string,
    readKey: READ_KEY as string,
    writeKey: WRITE_KEY as string
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadImageCosmic = async (req: any) => {
    if (req?.file?.originalname) {
        if (!req.file.originalname.includes('.png') &&
            !req.file.originalname.includes('.jpg') &&
            !req.file.originalname.includes('.jpeg')) {

            throw new Error('Formato de imagem inválido. Aceito apenas PNG, JPG e JPEG');
        }

        const media_object = {
            originalname: req.file.originalname,
            buffer: req.file.buffer
        };

        if (req.url && req.url.includes('publicacao')) {
            return await bucketClient.media.insertOne({
                media: media_object,
                folder: 'publicacao'
            });

        } else if (req.url && req.url.includes('avatar')) {
            return await bucketClient.media.insertOne({
                media: media_object,
                folder: 'avatar'
            });
        } else {
            return await bucketClient.media.insertOne({
                media: media_object,
                folder: 'stories'
            });
        }
    }
};

export { upload, uploadImageCosmic };