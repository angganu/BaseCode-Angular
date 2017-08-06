angular.module('nunuAPP')
    .factory('Persistence', ["$crypto", "localStorageService", function($crypto, localStorageService) {
        return {
            PERSISTENCE_KEY: {
                USER_DATA: "USER_DATA",
            },
            encrypt: function(data) {
                if (!data) return false;
                var encrypted = $crypto.encrypt(data);
                return encrypted;
            },
            decrypt: function(data) {
                if (!data) return false;
                var decrypted = $crypto.decrypt(data);
                return decrypted;
            },
            writeEncrypted: function(persistenceKey, data) {
                var storedData = data;
                if (storedData !== null && typeof storedData === 'object') {
                    storedData = JSON.stringify(storedData);
                }
                var encryptedData = this.encrypt(storedData);
                this.write(persistenceKey, encryptedData);
            },
            readEcrypted: function(persistenceKey) {
                var decryptedData;
                var encryptedData = this.read(persistenceKey);
                decryptedData = this.decrypt(encryptedData);
                try {
                    var jsonEncryptedData = JSON.parse(decryptedData);
                    return jsonEncryptedData;
                } catch (e) {
                    return decryptedData;
                }

                return decryptedData
            },
            write: function(persistenceKey, data) {
                var storedData = data;
                if (storedData !== null && typeof storedData === 'object') {
                    storedData = JSON.stringify(storedData);
                }
                localStorageService.set(persistenceKey, storedData);
            },
            read: function(persistenceKey) {
                var persistenceData = localStorageService.get(persistenceKey);
                try {
                    persistenceData = JSON.parse(persistenceData);
                } catch (e) {
                    persistenceData = localStorageService.get(persistenceKey);
                }
                return persistenceData;
            },
            remove: function(persistenceKey) {
                localStorageService.remove(persistenceKey);
            }
        }
    }]);
