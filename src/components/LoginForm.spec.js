// shallowMount는 vue에서 제공하는 test utils다.
import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

// describe(): 연관된 테스트 케이스를 그룹화하는 API
describe('LoginForm.vue', () => {
  // test(): 하나의 테스트 케이스를 검증하는 API
  test('ID가 이메일 형식이 아니면 경고 메시지가 출력 된다.', () => {
    //  wrapper에 shallowMount로 LoginForm 컴포넌트를 mount한다.
    // data안에 username을 입력하면 아래 값으로 username이 binding되면서 테스트를 진행하게 된다.
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    // warning class를 가진 input박스를 find()함수로 찾는다.
    const warningText = wrapper.find('.warning');
    // toBeTruthy()함수는 앞에 있는 값이 true인지 확인이다.
    expect(warningText.exists()).toBeTruthy();
  });

  //   ID와 PW값이 없으면 로그인버튼이 잘 비활성화 되는지 확인
  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});
