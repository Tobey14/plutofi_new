export const runtime = "nodejs"; // Ensure Node.js runtime

import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "newsletter_emails.xlsx");

async function updateLocalExcel(email: string) {
    let workbook = new ExcelJS.Workbook();
    let sheet;

    // Check if the file exists
    if (fs.existsSync(FILE_PATH)) {
        await workbook.xlsx.readFile(FILE_PATH);
        sheet = workbook.getWorksheet("Subscribers");
    } else {
        sheet = workbook.addWorksheet("Subscribers");
        sheet.addRow(["Email", "Date Subscribed"]); // Add headers
    }

    // Append new email
    sheet?.addRow([email, new Date().toISOString()]);

    // Save file
    await workbook.xlsx.writeFile(FILE_PATH);
}


import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const { email } = req.body;

        if (!email) {
            return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 });
        }

        await updateLocalExcel(email);

        return res.status(200).json({ success: true, message: "Email added successfully!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: "Failed to send email" });
    }
}
