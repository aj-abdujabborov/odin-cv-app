/* eslint-disable react/prop-types */
import { useState } from 'react';
import Subtitle from './Subtitle';
import Title from './Title';
import DateRange from './DateRange';
import BulletPointSet from './BulletPointSet';
import Deleter from './Deleter';

export default function SectionItem({
  editMode,
  removeMe,
  editMe,
  sectionItem,
}) {
  const [bg, setBg] = useState('');

  function getPropertyEditor(propName) {
    return function setProperty(prop) {
      editMe({
        ...sectionItem,
        [propName]: prop,
      });
    };
  }

  return (
    <li className="sectionItem deletable relative" style={{ background: bg }}>
      {editMode && (
        <Deleter
          setBg={setBg}
          removeComponent={removeMe}
          shift="-1rem"
        ></Deleter>
      )}

      <div className="spaceBetween">
        <Title
          editMode={editMode}
          text={sectionItem.title}
          editMe={getPropertyEditor('title')}
        ></Title>
        <DateRange
          editMode={editMode}
          start={sectionItem.startDate}
          end={sectionItem.endDate}
          editStart={getPropertyEditor('startDate')}
          editEnd={getPropertyEditor('endDate')}
        ></DateRange>
      </div>

      <Subtitle
        editMode={editMode}
        text={sectionItem.subtitle}
        editMe={getPropertyEditor('subtitle')}
      ></Subtitle>

      <BulletPointSet
        editMode={editMode}
        bpArray={sectionItem.bulletPoints}
        editMe={getPropertyEditor('bulletPoints')}
      ></BulletPointSet>
    </li>
  );
}
