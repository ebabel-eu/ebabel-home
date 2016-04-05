import React from 'react';

require('./footer.css');

export default function Footer() {
  return (
    <footer className="row">
      <div className="col-md-12">
        <p className="well">
          <a href="https://opensource.org/licenses/MIT">Copyright</a> &copy;
          2016 <a href="https://www.linkedin.com/in/nadjibamar">Nadjib Amar</a>,
          senior front-end developer
          based in <a href="https://www.google.nl/maps/place/Piet+Heinkade,+Amsterdam/@52.374212,4.9027729,14z/data=!4m2!3m1!1s0x47c609a7b4f50061:0xa2e47c8e5965f7a1">Amsterdam</a>
        </p>
      </div>
    </footer>
  );
}
