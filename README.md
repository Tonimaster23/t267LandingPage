<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hover Background Change</title>
  <style>
    .section {
      position: relative;
      height: 300px;
      background-image: url('original-image.jpg');
      background-size: cover;
      background-position: center;
      transition: background-image 0.3s ease;
    }
    .button {
      position: relative;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      z-index: 1; /* Ensure button stays on top */
    }
    .section:hover .button {
      /* No specific style for button hover in this case */
    }
    .section:hover {
      background-image: url('hover-image.jpg');
    }
  </style>
</head>
<body>
  <section class="section">
    <button class="button">Hover Me</button>
  </section>
</body>
</html>