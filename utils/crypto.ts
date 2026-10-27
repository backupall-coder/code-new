import CryptoJS from 'crypto-js';

/** Ưu tiên env; fallback chỉ để tương thích — production nên đặt NEXT_PUBLIC_AES_SECRET_KEY trong .env */
const secretKey =
    (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_AES_SECRET_KEY?.trim()) ||
    'HDNDT-JDHT8FNEK-JJHR';

export function decryptAES(encryptedData: string): string {
    if (!encryptedData || typeof encryptedData !== 'string') {
        throw new Error('Invalid encrypted input');
    }

    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) throw new Error('Decryption failed');
    return decrypted;
}

export function encryptAES(text: string): string {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
};