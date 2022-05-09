function generatestaff(staff) {
  const people = [];
  console.log(staff);
  staff.forEach((Object) => {
    if (Object.getRole() == "Intern") {
      people.push(Object.getRender());
    } else if (Object.getRole() == "Engineer") {
      people.push(Object.getRender());
    } else if (Object.getRole() == "Manager") {
      people.push(Object.getRender());
    }
  });
  return people;
}
function generatehtml(staff) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
    </head>
  
    <body>
      <header
        class="container-fluid text-center p-5"
        style="width: 100viewport; background-color: rgb(84, 2, 86)"
      >
        <h1 class="display-2" style="color: whitesmoke">TProfileGen</h1>
      </header>
      <section class="container-fluid p-4" style="width: 100viewport">
        <div class="row gy-5 p-5" style="width: 100%">
        ${generatestaff(staff)}
        </div>
      </section>
    </body>
  </html>
  `;
}
module.exports = generatehtml;
