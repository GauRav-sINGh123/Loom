import { client,sender} from "../utils/mail.js";
import { createWelcomeEmail } from "./email.template.js";

export const sendWelcomeEmail = async (email, name,profileUrl) => {
  const recipient = [{ email }];

	try {
		const response = await client.send({
			from: sender,
			to: recipient,
			subject: "Welcome to Loom",
			html: createWelcomeEmail(name, profileUrl),
			category: "Welcome",
		});

		console.log("Welcome Email sent sucessfully", response);
	} catch (error) {
		throw error;
	}
    
};