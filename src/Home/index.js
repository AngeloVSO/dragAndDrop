import "./styles.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";

const Home = () => {
  const technologies = [
    {
      id: "nodejs",
      title: "NodeJs",
      thumb:
        "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/nodejs/nodejs-original.svg",
    },
    {
      id: "react",
      title: "ReactJs",
      thumb:
        "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/react/react-original.svg",
    },
    {
      id: "typescript",
      title: "Typescript",
      thumb:
        "https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/typescript/typescript-original.svg",
    },
    {
      id: "javascript",
      title: "Javascript",
      thumb:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      id: "mysql",
      title: "MySql",
      thumb:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    },
  ];

  const [techs, setTechs] = useState(technologies);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(techs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTechs(items);
  };

  return (
    <main>
      <header>
        <h1>Drag and drop com React!</h1>
      </header>
      <section>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="techs">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {techs.map(({ id, title, thumb }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <img src={thumb} alt={`${title} Thumb`} />
                          <p>{title}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </section>
    </main>
  );
};

export default Home;
