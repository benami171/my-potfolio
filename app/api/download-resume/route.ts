import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(req: NextRequest) {
  // 1. Build the absolute path to your PDF in the public folder:
  const filePath = path.join(process.cwd(), 'public', 'Gal Ben Ami - Resume.pdf');

  // 2. Read the file as a Buffer
  const fileBuffer = fs.readFileSync(filePath);

  // 3. Return the file in the response with appropriate headers
  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Gal Ben Ami - Resume.pdf"',
    },
  });
}
