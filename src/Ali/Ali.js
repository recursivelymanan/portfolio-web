import "./Ali.css";
import React, { useState } from "react";
import ImageText from "../ImageText/ImageText";

function Ali() {
  return (
    <>
      <div class="howto">
        <div class="wrapper">
          <p class="howto">Hi Ali! Happy one year cutie</p>

          <p></p>
          <p class="howto">
            On this page is something I've put together representing the journey
            our relationship took until this day. It's kind of a poem and kind
            of rambling, but I hope you enjoy it.
          </p>
          <p class="howto">PS: if you see bold text, hover over it!</p>
          <p class="howto">PPS: do this on a laptop not ur phone pls</p>
          <p></p>
        </div>
      </div>
      <ImageText
        message="how to fall in love"
        imgSrc="/imgs/Title.JPG"
        classname="title"
      />
      <p class="subtitle">dedicated to ali, happy one year &lt;3</p>
      <p class="date">august 10, 2023</p>
      <p class="date">--------</p>
      <p> </p>
      <p class="title"> step 1</p>
      <p class="body">
        stop trying so hard to find a relationship. focus on your schoolwork and
        career, reach out to some labs, get a response! interview, accept the
        position, show up. enjoy your work, start to make friends.
      </p>
      <p class="body">
        be standing next to the inflatable dinosaur on the filing cabinet when
        your boss introduces you to the new girl joining lab, a girl with a
        brilliant smile and gorgeous hair.
      </p>
      <p class="title">step 2</p>
      <p class="body">forget her name, but remember her smile.</p>
    </>
  );
}

export default Ali;
