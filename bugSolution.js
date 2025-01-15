```javascript
// pages/about.js
import { useEffect, useState } from 'react';

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. {data.message}</p>
    </div>
  );
}
```
```javascript
// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Data fetched successfully!' });
}
```