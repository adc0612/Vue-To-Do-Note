module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": "off", // console.log() 가능하다.
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    "prettier/prettier": ['error', {
      singleQuote: true, // 따옴표는 홑따옴표를 사용한다.
      semi: true,  // 모든 구문에 세미콜론을 붙인다.
      useTabs: false, // Tab을 사용 안 한다.
      tabWidth: 2, // 들여쓰기 할 때, 기본 폭을 설정한다.
      trailingComma: 'all', // 객체, 배열 등에서 항상 마지막에 , 를 붙인다.
      printWidth: 80, // 한 줄에서 wrap 이 되는 기준의 글자 수를 정한다.
      bracketSpacing: true, // 객체 리터럴의 괄호 사이에 공백을 출력
      arrowParens: 'avoid', //화살표 함수에서 단일 파라미터에 괄호를 붙일지("always") 말지("avoid")에 대한 여부를 결정한다.
    }]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
