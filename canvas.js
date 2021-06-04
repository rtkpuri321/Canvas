//////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
const canvas = document.querySelector("#draw");
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.strokeStyle = "#BADASS";
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = 50;

      let isdraw = false;
      let lastx = 0;
      let lasty = 0;
      let h = 0;
      let dir = true;
      //ctx.globalCompositeOperation = "multiply";

      function draw(e) {
        if (!isdraw) return;
        console.log(e);
        ctx.strokeStyle = `hsl(${h},100%,50%)`;
        ctx.beginPath();
        ctx.moveTo(lastx, lasty);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastx = e.offsetX;
        lasty = e.offsetY;
        h++;
        if (h > 359) h = 0;

        if (ctx.lineWidth > 50 || ctx.lineWidth <= 1) {
          dir = !dir;
        }
        if (dir) {
          ctx.lineWidth++;
        } else {
          ctx.lineWidth--;
        }
      }
      canvas.addEventListener("mousemove", draw);
      canvas.addEventListener("mousedown", (e) => {
        isdraw = true;
        lastx = e.offsetX;
        lasty = e.offsetY;
      });
      canvas.addEventListener("mouseup", () => (isdraw = false));
      canvas.addEventListener("mouseout", () => (isdraw = false));
//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
