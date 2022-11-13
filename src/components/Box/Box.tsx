import './Box.css'

type Props = {
    title: string,
    children?: React.ReactNode;
  };
  const Box: React.FC<Props> = ({
    title,
    children
  }) => (
    <div>
      <h4>{title}</h4>
      <div className='container'>
      {children}
      </div>
    </div>
  );
export default Box