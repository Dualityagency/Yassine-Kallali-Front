import { sendDevisEmail, sendPreAssessmentEmail } from "@/services/emailService";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      fullName,
      email,
      questionOne,
      questionTwo,
      questionThree,
      questionFour,
      questionFive
    } = await request.json();

    if (
      !email ||
      !fullName ||
      !questionOne ||
      !questionTwo ||
      !questionThree ||
      !questionFour ||
      !questionFive
    ) {
      return NextResponse.json(
        { error: "errors.allFieldsRequired" },
        { status: 422 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "errors.invalidEmail" },
        { status: 422 },
      );
    }

    await sendPreAssessmentEmail(
      fullName,
      email,
      questionOne,
      questionTwo,
      questionThree,
      questionFour,
      questionFive
    );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error handling devis form:", error);
    return NextResponse.json(
      { error: "errors.internalServerError" },
      { status: 500 },
    );
  }
}
