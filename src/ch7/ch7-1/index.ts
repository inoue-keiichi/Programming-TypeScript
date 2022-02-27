interface API {
    getLoggedInUserID(): UserID;
    getFriendIDs(userID: UserID): UserID;
    getUserName(userID: UserID): string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class APIImpl implements API {
    getLoggedInUserID(): UserID {
        try {
            // execute API
        } catch (e) {
            if (e instanceof NetworkError) {
                return this.getLoggedInUserID();
            }
            throw new Error('Unexpexted error');
        }
    }

    getFriendIDs(userID: UserID): UserID[] {
        try {
            // execute API
        } catch (e) {
            if (e instanceof NetworkError) {
                return this.getFriendIDs(userID);
            }
            throw new Error('Unexpexted error');
        }
    }

    getUserName(userID: UserID): string {
        try {
            // execute API
        } catch (e) {
            if (e instanceof NetworkError) {
                return this.getUserName(userID);
            } else if (e instanceof InvalidParameterError) {
                throw e;
            }
            throw new Error('Unexpexted error');
        }
    }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UserID {}
