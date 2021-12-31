import TodoWrapper from 'components/templates/TodoWrapper/TodoWrapper';
import ThemeStore from 'provider/ThemeStore';
import Theme from 'provider/Theme';
import { TodoStore } from 'provider/TodoStore';

function Root() {
  return (
    <ThemeStore>
      <Theme>
        <TodoStore>
          <TodoWrapper />
        </TodoStore>
      </Theme>
    </ThemeStore>
  );
}

export default Root;
