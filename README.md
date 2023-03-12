# project-todo-app-front

# 실행 방법

## 설치 및 환경세팅

```
git clone https://github.com/Jxxunnn/project-todo-app-front.git

cd frontend -> npm i
cd backend -> npm i
```

## 실행

client

- port: 3000

```
cd frontend
npm run dev
```

server

- port: 8080

```
cd backend
npm run start
```

# 스터디 노트

## Chakra UI

```
https://chakra-ui.com/
```

### 개요

Chakra UI는 React 애플리케이션을 빌드하는데 필요한 블록을 제공하는 간단하고, 모듈적이며, 접근 가능한 컴포넌트 라이브러리다.

- 접근성 표준 WAI-ARIA standards를 엄격하게 따른 개발

- 다크모드 적용이 쉬움

- prop-based

스타일을 따로 지정해줄 필요 없이 props로 넘김

- 다양한 컴포넌트

Accordion, Alert, AlertDialog, AspectRatioBox, Avatar, Badge, Box, Breadcrumb, Button,Checkbox, CircularProgress, CloseButton, Code, Collapse, ControlBox, Divider, Drawer, Editable, Flex, FormControl, Grid, Heading, Icon, IconButton, Image, Input, Link, List, Menu, Modal, NumberInput, Popover, Progress, PseudoBox, Radio, SimpleGrid, Select, Skeleton, Slider, Spinner, Stat, Stack, Switch, Tabs, Tag, Text, Textarea, Toast, Tooltip 등등……

- 유틸리티

1. useClipboard : 클립보드로 내용을 복사하는 커스텀 훅,
2. useDisclosure : Modal, Drawer 등의 Open, Close, Toggle 을 지원하는 커스텀 훅,
3. useColorMode : 초기 설정 후 매우 간단하게 colorMode를 변경하게 해주는 훅 등등

### Usage

```js
import { Box } from "@chakra-ui/react";

// picks up a nested color value using dot notation
// => 'theme.colors.gray[50]'
<Box color="gray.50" />

// raw CSS color value
<Box color="#f00" />

// background colors
<Box bg="tomato" />

// verbose prop
<Box backgroundColor="tomato" />

```

Box 컴포넌트는 다른 모든 차크라 UI 컴포넌트 위에 구축되는 가장 추상적인 컴포넌트. 기본적으로 이 컴포넌트는 div 요소를 렌더링.

### Feature

- Flex 컴포넌트

```js
import { Box, Flex } from "@chakra-ui/react";

// verbose
<Box display="flex" alignItems="center" justifyContent="space-between">
  Box with Flex props
</Box>;

// shorthand using the 'Flex' component
<Flex align="center" justify="center">
  Flex Container
</Flex>;
```

- Center 컴포넌트

자식 요소를 가운데에 정렬해주는 레이아웃 컴포넌트

```js
<Center bg="tomato" h="100px" color="white">
  This is the Center
</Center>
```

- Modal 컴포넌트

1. 모달 내용을 보여주고 -> ModalContent
2. 모달 닫기 버튼 -> ModalCloseButton
3. 모달 뒤 배경은 투명하게 -> ModalOverlay
4. 모달 외부 영영 클릭 시 작동하지 않게 -> closeOnOverlayClick={false}

```js
function VerticallyCenter() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Trigger modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
```
