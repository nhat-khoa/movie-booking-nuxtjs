export default defineNuxtPlugin(() => {
    return {
        provide: {
            googleSignIn: () => {
                return new Promise((resolve, reject) => {
                    google.accounts.id.initialize({
                        client_id: useRuntimeConfig().public.googleClientId,
                        callback: async (response) => {
                            if (response.credential) {
                                console.log("Google Response:", response);
                                resolve(response.credential); // Trả về token
                            } else {
                                reject("Đăng nhập thất bại");
                            }
                        },
                        ux_mode: "popup",
                        use_fedcm_for_consent: false,
                    });
                    google.accounts.id.prompt();
                });
            },
        },
    };
});