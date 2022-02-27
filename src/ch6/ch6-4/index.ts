let userId: string | undefined;
fetchUser();
if (isString(userId)) {
    userId.toUpperCase();
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function fetchUser(): void {}

function isString(str?: unknown): str is string {
    return typeof str === 'string';
}
