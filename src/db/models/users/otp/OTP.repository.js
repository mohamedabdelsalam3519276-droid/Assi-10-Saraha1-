import { DbRepostory } from "../../../db.repository.js";
import { OTP } from "./OTP.model.js";

class OTPrepository extends DbRepostory {
    constructor() {
        super(OTP)
    }
}
export const otprepository= new OTPrepository()