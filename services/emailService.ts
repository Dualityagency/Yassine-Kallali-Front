// services/emailService.ts
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASS,
  },
});

export const sendPreAssessmentEmail = async (
  fullName: string,
  email: string,
  questionOne: string,
  questionTwo: string,
  questionThree: string,
  questionFour: string,
  questionFive: string,
): Promise<void> => {
  if (!email || !fullName) {
    throw new Error("Missing recipient email or name for confirmation email.");
  }
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.CONTACT_RECEIVER,
    subject: "📋 Pré-évaluation gratuite | Dr. Yassine Kallali",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p><strong>Nom & Prénom:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>1/ Dans quelle région se situe la dent à remplacer?</strong> ${questionOne}</p>
        <p><strong>2/ La dent est-elle douloureuse ou infectée?</strong> ${questionTwo}</p>
        <p><strong>3/ Avez-vous déjà perdu du volume osseux ?</strong> ${questionThree}</p>
        <p><strong>4/ Avez-vous des problèmes de santé spécifiques?</strong> ${questionFour}</p>
        <p><strong>5/ Souhaitez-vous poser l'implant le même jour que l'extraction ?</strong><br/>${questionFive}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        `Failed to send confirmation email to ${email}:`,
        error.message,
      );
      throw new Error(`Email sending failed for ${email}: ${error.message}`);
    } else {
      console.error(
        `An unknown error occurred while sending email to ${email}`,
      );
      throw new Error(`Email sending failed for ${email}: Unknown error`);
    }
  }
};

export const sendDevisEmail = async (
  fullName: string,
  country: string,
  email: string,
  phoneNumber: number,
  languge: string,
  typeOfCare: string,
  message: string,
): Promise<void> => {
  if (!email || !fullName) {
    throw new Error("Missing recipient email or name for devis email.");
  }
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.CONTACT_RECEIVER,
    subject: "📩 Nouveau message reçu via le formulaire de contact | Dr. Yassine Kallali",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p><strong>Nom & Prénom:</strong> ${fullName}</p>
        <p><strong>Pays de résidence:</strong> ${country}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Numéro de téléphone:</strong> ${phoneNumber}</p>
        <p><strong>Langue préférée:</strong> ${languge}</p>
        <p><strong>Type de soin:</strong> ${typeOfCare}</p>
        <p><strong>Votre message:</strong><br/>${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Failed to send devis email to ${email}:`, error.message);
      throw new Error(`Email sending failed for ${email}: ${error.message}`);
    } else {
      console.error(
        `An unknown error occurred while sending devis email to ${email}`,
      );
      throw new Error(`Email sending failed for ${email}: Unknown error`);
    }
  }
};
