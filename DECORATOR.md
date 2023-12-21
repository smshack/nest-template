# 데코레이터

- 각 요소의 선언부 앞에 @ 로 시작하는 데코레이터를 선언 구현된 코드를 함께 실행

```
class CreateUserDto {
    @IsEmail()
    @MaxLength(60)
    readonly email: string;

    @IsString()
    @Matches(/^[a-zA-Z0-9   ]*$/)   //
    readonly password: string;
}
```

- tsconfig.json에 아래 설정으로 데코레이터 사용 가능
  > experimentalDecorators: true; //
