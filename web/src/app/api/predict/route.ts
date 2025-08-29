import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('image') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 })
    }

    // Convert to base64 (as your Flask API expects)
    const bytes = await file.arrayBuffer()
    const base64Image = Buffer.from(bytes).toString('base64')

    // Your Flask API URL (deploy separately)  
    const flaskUrl = process.env.FLASK_API_URL || 'http://localhost:8080'

    const response = await fetch(`${flaskUrl}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: base64Image }),
    })

    if (!response.ok) throw new Error('Flask API error')

    const result = await response.json()
    
    return NextResponse.json({
      success: true,
      plant: result.plant,
      disease: result.disease, 
      remedy: result.remedy
    })

  } catch (error) {
    return NextResponse.json({ error: 'Detection failed' }, { status: 500 })
  }
}
