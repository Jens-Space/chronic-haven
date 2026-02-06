import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for demo (use database in production)
const symptomEntries: Array<{
  id: string;
  userId: string;
  date: string;
  pain: number;
  fatigue: number;
  sleep: number;
  mood: number;
  concentration: number;
  notes: string;
}> = [
  {
    id: '1',
    userId: 'demo-user',
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    pain: 6,
    fatigue: 7,
    sleep: 4,
    mood: 5,
    concentration: 4,
    notes: 'Heavy day yesterday, lots of brain fog',
  },
  {
    id: '2',
    userId: 'demo-user',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    pain: 4,
    fatigue: 5,
    sleep: 6,
    mood: 7,
    concentration: 6,
    notes: 'Better day, managed to go for a walk',
  },
  {
    id: '3',
    userId: 'demo-user',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    pain: 7,
    fatigue: 8,
    sleep: 3,
    mood: 4,
    concentration: 3,
    notes: 'Flare-up day, stayed in bed most of the time',
  },
];

// GET - Fetch all symptom entries
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId') || 'demo-user';

    const userEntries = symptomEntries.filter((e) => e.userId === userId);

    return NextResponse.json(userEntries);
  } catch (error) {
    console.error('Error fetching symptoms:', error);
    return NextResponse.json(
      { error: 'Failed to fetch symptoms' },
      { status: 500 }
    );
  }
}

// POST - Create a new symptom entry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pain, fatigue, sleep, mood, concentration, notes } = body;

    const userId = 'demo-user';

    const entry = {
      id: `entry-${Date.now()}`,
      userId,
      pain,
      fatigue,
      sleep,
      mood,
      concentration,
      notes: notes || '',
      date: new Date().toISOString(),
    };

    symptomEntries.unshift(entry);

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error('Error creating symptom entry:', error);
    return NextResponse.json(
      { error: 'Failed to create symptom entry' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a symptom entry
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    const index = symptomEntries.findIndex((e) => e.id === id);
    if (index > -1) {
      symptomEntries.splice(index, 1);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting symptom entry:', error);
    return NextResponse.json(
      { error: 'Failed to delete symptom entry' },
      { status: 500 }
    );
  }
}
