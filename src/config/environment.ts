export function getServer(): string {
    if (process.env.REACT_APP_ENVIRONMENT === 'development') {
        return 'http://localhost:8000';
    }

    return '';
}
