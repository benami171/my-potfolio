// app/api/download-resume/route.ts
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

// Force the Node.js runtime so fs is allowed:
export const runtime = 'nodejs';

export async function GET() {
  try {
    // 1. Path to the PDF
    const filePath = path.join(process.cwd(), 'public', 'resume.pdf');

        // // Debug logging
        // console.log('filePath:', filePath);
        // console.log('Exists?', fs.existsSync(filePath));

    // 2. Read the file into a buffer
    const fileBuffer = fs.readFileSync(filePath);

    // 3. Return the file in the response with download headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Gal Ben Ami - Resume.pdf"',
      },
    });
  } catch (err) {
    console.error('File not found or another error:', err);
    return new NextResponse('File not found', { status: 404 });
  }
}