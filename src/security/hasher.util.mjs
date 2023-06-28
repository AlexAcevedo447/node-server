import bcrypt from "bcryptjs"

/**
 * @param {string} password 
 * @returns {string}
 */
export const encrypt = (password) => {
    try {
        const salt = bcrypt.genSaltSync(8);
        const encrypted = bcrypt.hashSync(password, salt);
        return encrypted;
    } catch (error) {
        console.error(error);
        return "";
    }
}

/**
 * @param {string} password 
 * @param {string} encryptedPassword 
 * @returns {boolean}
 */
export const verify = (password, encryptedPassword) => {
    const verified = bcrypt.compareSync(password, encryptedPassword);
    if (!password || !encryptedPassword) {
        return false;
    } else {
        return verified;
    }

}