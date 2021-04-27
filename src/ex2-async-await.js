async function loadData() {
  let data;
  let parsedData;
  try {
    data = await fetch("https://swapi.dev/api/people/");
    if (!data.ok) {
      throw new Error(data.statusText);
    }
    parsedData = await data.json();
  } catch (err) {
    console.log(err);
  }
  console.log(parsedData);
}

//loadData();
//loadData().then((res) => console.log(res));
