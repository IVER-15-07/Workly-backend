import admin from 'firebase-admin';
import fs from 'fs';


const servicePath = new URL('./sis-colab-firebase-adminsdk-fbsvc-18504c85fd.json', import.meta.url);
const serviceAccount = JSON.parse(fs.readFileSync(servicePath, 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;