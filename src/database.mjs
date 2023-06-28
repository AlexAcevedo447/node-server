import { UserModel } from "./models/entities.mjs"
import { encrypt } from "./security/index.mjs";
export const users = [new UserModel(0, "pepito@perez.com", "PepitoPerez123", encrypt("pepito1234")), new UserModel(1, "fulanito@ossa.com", "FulanitoOssa234", encrypt("fulanito1234")), new UserModel(2, "peranito@munoz.com", "PeranitoMunoz234", encrypt("peranito1234"))];

