export function getIST() {
  const t = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  const hr = t.getHours();
  const open = hr >= 11 && hr < 23;
  const statusText = open
    ? 'Open now · until 11 pm'
    : hr < 11
    ? 'Closed now · opens 11 am'
    : 'Closed now · opens 11 am tomorrow';

  const dotStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    flex: 'none',
    background: open ? '#C4441E' : '#8B968F',
    boxShadow: open ? '0 0 0 4px rgba(196,68,30,0.18)' : 'none',
  };

  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const todayIdx = (t.getDay() + 6) % 7; // Monday = 0, Sunday = 6
  const days = dayNames.map((n, i) => {
    const today = i === todayIdx;
    return {
      name: today ? `${n} · today` : n,
      today,
    };
  });

  return { t, hr, open, statusText, dotStyle, days, todayIdx };
}

