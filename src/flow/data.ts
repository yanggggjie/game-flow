export const nodes = [
  {
    id: '184ffec1-e4f9-4b7c-9109-1e68e7cb75c9',
    type: 'TopicNode',
    data: {
      title: '选定主题',
    },
    selected: true,
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: '223e9688-d999-4969-a7ca-aa0e7efbc59a',
    type: 'SettingNode',
    data: {
      title: '基本设定',
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: 'b577b439-642e-4ee1-a07c-34fb4b5b4dd0',
    type: 'WorldviewNode',
    data: {
      title: '世界观',
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: 'cfcda8da-ceda-4097-906f-918c12952039',
    type: 'CharacterNode',
    data: {
      title: '人物志',
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: 'd48e4cf6-dc8c-4319-856e-77002f7eef18',
    type: 'StoryNode',
    data: {
      title: '故事线',
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: '9e35cd0f-51b0-4a26-90fa-58883a309261',
    type: 'BackgroundNode',
    data: {
      title: '故事背景',
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: '6fcbb430-8dfd-42c0-a480-979f3cffc43d',
    type: 'CombatNode',
    data: {
      title: '战斗系统',
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: 'f3a8b867-b85a-4dc4-bce0-995e94f6973b',
    type: 'MainNode',
    data: {
      title: '主角设计',
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: '04f98569-65f1-43a2-8903-8e58c6bbe180',
    type: 'SupportNode',
    data: {
      title: '配角设计',
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: '167559f8-1388-4b3d-a829-80a9232e0803',
    type: 'ChapterNode',
    data: {
      title: '游戏章节/关卡',
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: 'c08c7937-04cd-430f-8ae7-8748ac5b5087',
    type: 'CharacterImageNode',
    data: {
      title: '人物形象',
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: 'bd04efb1-da1a-408f-ba5d-72aa290f9dd7',
    type: 'CharacterImageNode',
    data: {
      title: '人物形象',
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: '2840c554-1b6e-46ae-8cc2-1ec6899b80c2',
    type: 'TranslateNode',
    data: {
      title: '翻译',
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: 'f0b3097a-2923-44b8-b30e-958fbbe9904a',
    type: 'TranslateNode',
    data: {
      title: '翻译',
    },
  },
  {
    selected: false,
    position: {
      x: 0,
      y: 0,
    },
    id: '79751839-cfef-401b-a95f-adb2524e5daf',
    type: 'TranslateNode',
    data: {
      title: '翻译',
    },
  },
]

export const edges = [
  {
    id: '4bc119ab-5208-4159-b3e3-24c2dc9a0208',
    source: '184ffec1-e4f9-4b7c-9109-1e68e7cb75c9',
    target: '223e9688-d999-4969-a7ca-aa0e7efbc59a',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
  {
    id: '9f322a06-1a13-4bb5-80ac-c08193d80400',
    source: '223e9688-d999-4969-a7ca-aa0e7efbc59a',
    target: 'b577b439-642e-4ee1-a07c-34fb4b5b4dd0',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
  {
    id: 'faa15f04-d51c-4a27-8a76-09986b5eba34',
    source: '223e9688-d999-4969-a7ca-aa0e7efbc59a',
    target: 'cfcda8da-ceda-4097-906f-918c12952039',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
  {
    id: '9272ce7e-cfe7-4f01-bc76-d7de253ce3c0',
    source: '223e9688-d999-4969-a7ca-aa0e7efbc59a',
    target: 'd48e4cf6-dc8c-4319-856e-77002f7eef18',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
  {
    id: '22d32baf-51f1-42df-bfe3-7e676dd200ea',
    source: 'b577b439-642e-4ee1-a07c-34fb4b5b4dd0',
    target: '9e35cd0f-51b0-4a26-90fa-58883a309261',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
  {
    id: 'a08a96bd-49ba-49a2-bed4-10178e134bb7',
    source: 'b577b439-642e-4ee1-a07c-34fb4b5b4dd0',
    target: '6fcbb430-8dfd-42c0-a480-979f3cffc43d',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
  {
    id: '0047fb22-83ad-4084-9860-7de83240fb39',
    source: 'cfcda8da-ceda-4097-906f-918c12952039',
    target: 'f3a8b867-b85a-4dc4-bce0-995e94f6973b',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
  {
    id: '3a7f3647-4e91-42ce-8069-ada455ff25ab',
    source: 'cfcda8da-ceda-4097-906f-918c12952039',
    target: '04f98569-65f1-43a2-8903-8e58c6bbe180',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
  {
    id: '6ae83daf-50a7-4c1d-b17a-f26618809c7c',
    source: 'd48e4cf6-dc8c-4319-856e-77002f7eef18',
    target: '167559f8-1388-4b3d-a829-80a9232e0803',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
  {
    id: 'a356ddf3-8524-4d6c-b439-4536984c78d9',
    source: 'f3a8b867-b85a-4dc4-bce0-995e94f6973b',
    target: 'c08c7937-04cd-430f-8ae7-8748ac5b5087',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
  {
    id: '786bbb11-9a61-4900-99ca-c2235a55991b',
    source: '04f98569-65f1-43a2-8903-8e58c6bbe180',
    target: 'bd04efb1-da1a-408f-ba5d-72aa290f9dd7',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
  {
    id: '1ae0958a-4d1d-4cdf-9bf3-9b68da3b6410',
    source: '167559f8-1388-4b3d-a829-80a9232e0803',
    target: '2840c554-1b6e-46ae-8cc2-1ec6899b80c2',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
  {
    id: '6ba252a7-1cf8-4567-8dac-8bcdce1fa79c',
    source: '6fcbb430-8dfd-42c0-a480-979f3cffc43d',
    target: 'f0b3097a-2923-44b8-b30e-958fbbe9904a',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
  {
    id: '48811b91-cbf2-4245-b050-93eb08a53636',
    source: '9e35cd0f-51b0-4a26-90fa-58883a309261',
    target: '79751839-cfef-401b-a95f-adb2524e5daf',
    type: 'CustomEdge',
    pathOptions: {
      borderRadius: 1000,
    },
    markerEnd: {
      type: 'arrow',
      strokeWidth: 1.5,
      color: '#1E5DFF',
      width: 16,
      height: 16,
    },
    animated: true,
    style: {
      strokeWidth: 2,
      stroke: '#1E5DFF',
    },
  },
]
