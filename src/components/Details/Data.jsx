import React from "react";

export default function Data({ name }) {
  if (name === "Plain") {
    return <Plain />;
  } else if (name === "Aniway") {
    return <Aniway />;
  } else if (name === "Biary") {
    return <Biary />;
  }
}

export function Plain() {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel quam
      odio. Sed interdum nibh sodales volutpat maximus. Suspendisse bibendum
      vulputate tortor, ut posuere nunc commodo nec. Sed scelerisque, mauris non
      commodo eleifend, enim ipsum posuere metus, eu sagittis lectus purus
      rhoncus orci. Duis risus lacus, gravida molestie porttitor id, bibendum
      egestas velit. Nullam at urna ut ante consectetur tincidunt sed vitae
      libero. Nunc sit amet mollis est. Praesent lectus lacus, dictum at nisl
      nec, ultrices hendrerit ante. Etiam sit amet libero ipsum. Morbi a mi
      vitae lectus vehicula ullamcorper eu nec nulla. Donec volutpat nibh vel
      pretium fringilla. Pellentesque pellentesque nisl et urna tristique
      semper. Vestibulum sagittis risus in euismod pulvinar. Maecenas at est sed
      diam maximus pulvinar at eget ligula. Quisque id quam eget dolor ultrices
      sagittis in vel dui. Ut lobortis nisl quis commodo porttitor. Quisque
      semper, lectus congue laoreet pharetra, neque est consectetur augue, quis
      tempus diam urna sed arcu. Aenean ac magna facilisis, mollis arcu vel,
      fermentum felis. In tincidunt, dui vel gravida placerat, lectus risus
      facilisis velit, quis semper odio nunc vel diam.
      <img src='/assets/plain/1.jpg' />
      Ut pretium nisi ac placerat posuere. Donec dui mauris, venenatis ut velit
      vitae, congue scelerisque magna. Quisque id ornare justo. Fusce ultricies
      sagittis nisl sit amet vulputate. Donec sed neque metus. Morbi efficitur
      odio iaculis sem ultrices fermentum. Ut non purus sodales, egestas nisi
      et, cursus enim. Fusce fermentum porttitor tortor nec blandit. Maecenas
      rhoncus lorem a ligula vestibulum, in efficitur sem imperdiet. Nulla
      facilisi. Donec nec arcu tincidunt, suscipit orci ut, tristique metus.
      Vestibulum varius diam orci, sit amet efficitur nunc vulputate vel. Morbi
      luctus velit et ligula rhoncus, volutpat ornare justo placerat. Aenean
      cursus sodales erat, tincidunt efficitur enim facilisis efficitur.
      Maecenas a luctus libero, faucibus
      <img src='/assets/plain/2.jpg' />
      consequat ipsum. Vestibulum placerat, neque pellentesque posuere feugiat,
      ligula massa tincidunt leo, eu elementum sem massa a metus. Etiam
      convallis congue nibh efficitur semper. Integer tempor tellus pharetra
      lectus accumsan sodales. Suspendisse eu justo porttitor, pulvinar dolor a,
      vestibulum magna. Nulla efficitur lobortis odio vitae sagittis. Donec
      luctus feugiat lacinia. Vestibulum ut feugiat felis, eu pretium lorem.
      Duis et sapien gravida, laoreet quam sit amet, luctus erat. Integer sed
      felis sit amet leo vulputate fringilla sit amet vel odio. Maecenas eu
      facilisis sapien. Curabitur sapien est, semper at pellentesque ac, iaculis
      in mauris. Mauris pulvinar in odio ut ultrices. Aenean elit neque, cursus
      sit amet aliquet rhoncus, aliquet a diam.
      <img src='/assets/plain/3.jpg' />
      Ut molestie felis vitae mauris tincidunt, quis varius mauris sagittis.
      Quisque quis quam cursus, maximus odio vel, volutpat magna. Integer
      lobortis massa eu odio semper, vel malesuada mauris placerat. Sed
      fringilla sapien suscipit, tincidunt eros eget, dapibus nunc. Duis nisl
      purus, scelerisque non fringilla nec, sagittis at urna. Sed ac risus
      finibus, lobortis ligula quis, fringilla dui. Vestibulum feugiat luctus
      dictum. Donec dignissim libero dolor, sit amet fermentum arcu commodo at.
      <img src='/assets/plain/4.jpg' />
      Thank you.
    </p>
  );
}

export function Aniway() {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel quam
      odio. Sed interdum nibh sodales volutpat maximus. Suspendisse bibendum
      vulputate tortor, ut posuere nunc commodo nec. Sed scelerisque, mauris non
      commodo eleifend, enim ipsum posuere metus, eu sagittis lectus purus
      rhoncus orci. Duis risus lacus, gravida molestie porttitor id, bibendum
      egestas velit. Nullam at urna ut ante consectetur tincidunt sed vitae
      libero. Nunc sit amet mollis est. Praesent lectus lacus, dictum at nisl
      nec, ultrices hendrerit ante. Etiam sit amet libero ipsum. Morbi a mi
      vitae lectus vehicula ullamcorper eu nec nulla. Donec volutpat nibh vel
      pretium fringilla. Pellentesque pellentesque nisl et urna tristique
      semper. Vestibulum sagittis risus in euismod pulvinar. Maecenas at est sed
      diam maximus pulvinar at eget ligula. Quisque id quam eget dolor ultrices
      sagittis in vel dui. Ut lobortis nisl quis commodo porttitor. Quisque
      semper, lectus congue laoreet pharetra, neque est consectetur augue, quis
      tempus diam urna sed arcu. Aenean ac magna facilisis, mollis arcu vel,
      fermentum felis. In tincidunt, dui vel gravida placerat, lectus risus
      facilisis velit, quis semper odio nunc vel diam.
      <img src='/assets/aniway/1.jpg' />
      Ut pretium nisi ac placerat posuere. Donec dui mauris, venenatis ut velit
      vitae, congue scelerisque magna. Quisque id ornare justo. Fusce ultricies
      sagittis nisl sit amet vulputate. Donec sed neque metus. Morbi efficitur
      odio iaculis sem ultrices fermentum. Ut non purus sodales, egestas nisi
      et, cursus enim. Fusce fermentum porttitor tortor nec blandit. Maecenas
      rhoncus lorem a ligula vestibulum, in efficitur sem imperdiet. Nulla
      facilisi. Donec nec arcu tincidunt, suscipit orci ut, tristique metus.
      Vestibulum varius diam orci, sit amet efficitur nunc vulputate vel. Morbi
      luctus velit et ligula rhoncus, volutpat ornare justo placerat. Aenean
      cursus sodales erat, tincidunt efficitur enim facilisis efficitur.
      Maecenas a luctus libero, faucibus
      <img src='/assets/aniway/2.jpg' />
      consequat ipsum. Vestibulum placerat, neque pellentesque posuere feugiat,
      ligula massa tincidunt leo, eu elementum sem massa a metus. Etiam
      convallis congue nibh efficitur semper. Integer tempor tellus pharetra
      lectus accumsan sodales. Suspendisse eu justo porttitor, pulvinar dolor a,
      vestibulum magna. Nulla efficitur lobortis odio vitae sagittis. Donec
      luctus feugiat lacinia. Vestibulum ut feugiat felis, eu pretium lorem.
      Duis et sapien gravida, laoreet quam sit amet, luctus erat. Integer sed
      felis sit amet leo vulputate fringilla sit amet vel odio. Maecenas eu
      facilisis sapien. Curabitur sapien est, semper at pellentesque ac, iaculis
      in mauris. Mauris pulvinar in odio ut ultrices. Aenean elit neque, cursus
      sit amet aliquet rhoncus, aliquet a diam.
      <img src='/assets/aniway/3.jpg' />
      Ut molestie felis vitae mauris tincidunt, quis varius mauris sagittis.
      Quisque quis quam cursus, maximus odio vel, volutpat magna. Integer
      lobortis massa eu odio semper, vel malesuada mauris placerat. Sed
      fringilla sapien suscipit, tincidunt eros eget, dapibus nunc. Duis nisl
      purus, scelerisque non fringilla nec, sagittis at urna. Sed ac risus
      finibus, lobortis ligula quis, fringilla dui. Vestibulum feugiat luctus
      dictum. Donec dignissim libero dolor, sit amet fermentum arcu commodo at.
      <img src='/assets/aniway/4.jpg' />
      Thank you.
    </p>
  );
}

export function Biary() {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel quam
      odio. Sed interdum nibh sodales volutpat maximus. Suspendisse bibendum
      vulputate tortor, ut posuere nunc commodo nec. Sed scelerisque, mauris non
      commodo eleifend, enim ipsum posuere metus, eu sagittis lectus purus
      rhoncus orci. Duis risus lacus, gravida molestie porttitor id, bibendum
      egestas velit. Nullam at urna ut ante consectetur tincidunt sed vitae
      libero. Nunc sit amet mollis est. Praesent lectus lacus, dictum at nisl
      nec, ultrices hendrerit ante. Etiam sit amet libero ipsum. Morbi a mi
      vitae lectus vehicula ullamcorper eu nec nulla. Donec volutpat nibh vel
      pretium fringilla. Pellentesque pellentesque nisl et urna tristique
      semper. Vestibulum sagittis risus in euismod pulvinar. Maecenas at est sed
      diam maximus pulvinar at eget ligula. Quisque id quam eget dolor ultrices
      sagittis in vel dui. Ut lobortis nisl quis commodo porttitor. Quisque
      semper, lectus congue laoreet pharetra, neque est consectetur augue, quis
      tempus diam urna sed arcu. Aenean ac magna facilisis, mollis arcu vel,
      fermentum felis. In tincidunt, dui vel gravida placerat, lectus risus
      facilisis velit, quis semper odio nunc vel diam.
      Thank you.
    </p>
  );
}
