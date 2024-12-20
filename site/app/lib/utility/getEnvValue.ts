export const getEnvValue = (key: string) => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`No ${key} environment variable found.`);
    }
    return value;
};
