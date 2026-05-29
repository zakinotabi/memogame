async function album(id) {
  try {
    //old api cause it suck at accuracy
    //const response = await fetch(`https://itunes.apple.com/search?term=${name}&media=music&entity=album&limit=1`);
    const response = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=album`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log('API Service Error:', error);
    throw error;
  }
}

export default album;
