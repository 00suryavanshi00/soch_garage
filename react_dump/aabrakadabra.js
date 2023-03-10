import React from "react";
import { createRoot, render } from "react-dom/client";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import "gifler";

const GIF = ({ src }) => {
  const imageRef = React.useRef(null);
  const canvas = React.useMemo(() => {
    const node = document.createElement("canvas");
    return node;
  }, []);
  React.useEffect(() => {
    // save animation instance to stop it on unmount
    let anim;
    window.gifler(src).get((a) => {
      anim = a;
      anim.animateInCanvas(canvas);
      anim.onDrawFrame = (ctx, frame) => {
        ctx.drawImage(frame.buffer, frame.x, frame.y);
        // imageRef.current.getLayer().draw();
      };
    });
    return () => anim.stop();
  }, [src, canvas]);
  return <Image image={canvas} ref={imageRef} />;
};

const URLImage = ({ image }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      draggable="true"
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

const App = () => {
  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]);
  return (
    <div>
      Story Components
      <br />
      <img
        alt="lion"
        src="https://konvajs.org/assets/lion.png"
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />
      <GIF
        alt="gif"
        src="https://media4.giphy.com/media/Me15dPbub4gXFVlrky/giphy.gif?cid=ecf05e47dwzrh7jc1r177fih70uckqtppdc2b657s9xcuds3&rid=giphy.gif&ct=s"
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />
      <div
        onDrop={(e) => {
          e.preventDefault();

          // register event position
          stageRef.current.setPointersPositions(e);
          // add image
          setImages(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                src: dragUrl.current
              }
            ])
          );
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ border: "1px solid grey" }}
          ref={stageRef}
        >
          <Layer>
            {images.map((image) => {
              return <URLImage image={image} />;
            })}
            {images.map((node) => {
              return <GIF src={node} />;
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
