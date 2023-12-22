import React from "react";
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Авдошкевич И. М.", 
    git: "https://github.com/Vano1516/web_lab_aib_frontend.git" },
  { id: 2, name: "Антонюк Д. И.", 
    git: "https://github.com/vACLavvv/web_lab_aib_frontend.git" },
  { id: 3, name: "Атаманов А. Я.", 
    git: "https://github.com/Kaisambo/web_lab_aib_frontend.git" },
  { id: 4, name: "Горбанев В.В.", 
    git: "https://github.com/SlivkaPRO/web_lab_aib_frontend.git" },
  { id: 5, name: "Ковальчук А. В.", 
    git: "https://github.com/a1ehanJS/web_lab_aib_frontend.git" },
  { id: 6, name: "Морозов Е. Ю.", 
    git: "https://github.com/sa1lor77/web_lab_aib_frontend.git" },
  { id: 7, name: "Светличный Н. А.", 
    git: "https://github.com/svetlichny69/web_lab_aib_frontend-hahaha-.git" },
  { id: 8, name: "Склярова М. В.", 
    git: "https://github.com/cicada0133/web_lab_aib_frontend.git" },
  { id: 9, name: "Черняев В. К.", 
    git: "https://github.com/VladimirROSTOV/web_lab_aib_frontend.git" },
  { id: 10, name: "Шабунин Д. И.", 
    git: "https://github.com/NEDxZer0/web_programming.git" },
];

const UserList = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Группа АИБ-3-043</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            <Link to={`/users/${user.id}`} state={{ user }}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;