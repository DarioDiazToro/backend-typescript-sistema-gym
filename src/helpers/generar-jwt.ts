
import jwt from "jsonwebtoken";

export const generarJWT = (payload: any, duration: string = "4h") => {

    return new Promise((resolve, reject) => {

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY!, { expiresIn: duration }, (err, token) => {

            if (err) {
                console.log(err);
                reject("No se pudo generar el token");
            } else {
                resolve(token);
            }
        });

    });
};

