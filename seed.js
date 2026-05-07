const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Note = require('./models/Note');

dotenv.config();

const seedNotes = [
  {
    title: 'Midnight Thoughts',
    content:
      'The rain tapping against the window pane felt rhythmic, almost like a metronome setting the pace for the evening. I found myself thinking about the decisions made last year, the subtle shifts in trajectory that led me to this quiet room in October.',
    category: 'Diary',
    readTime: '5 min read',
  },
  {
    title: 'The Obsidian Sea',
    content:
      'Chapter 4 began with a stark realization. The coast was not merely eroded; it was actively retreating, pulled back into the dark waters by a force unseen. Elias stood at the precipice, the salt spray cold against his cheek, clutching the iron lantern.',
    category: 'Novel Draft',
    readTime: '12 min read',
  },
  {
    title: 'Architecture of Silence',
    content:
      'We move through spaces designed to guide us without our explicit awareness. The placement of a door, the subtle slope of a floor, the strategic lighting in a corridor—these are not mere aesthetic choices, but structural commands spoken in a silent language.\n\nConsider the concept of negative space. In typography, it is the white space that makes the black ink legible. In urban planning, it is the plaza that allows the skyscraper to breathe.',
    category: 'Research',
    readTime: '15 min read',
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for seeding...');

    await Note.deleteMany();
    console.log('Cleared existing notes.');

    const created = await Note.insertMany(seedNotes);
    console.log(`Seeded ${created.length} notes successfully!`);

    process.exit(0);
  } catch (error) {
    console.error(`Seed error: ${error.message}`);
    process.exit(1);
  }
};

seedDB();
