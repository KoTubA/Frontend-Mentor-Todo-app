import TodoWrapper from 'components/templates/TodoWrapper/TodoWrapper';
import ThemeStore from 'provider/ThemeStore';
import Theme from 'provider/Theme';

function Root() {
  return (
    <ThemeStore>
      <Theme>
        <TodoWrapper />
      </Theme>
    </ThemeStore>
  );
}

export default Root;
