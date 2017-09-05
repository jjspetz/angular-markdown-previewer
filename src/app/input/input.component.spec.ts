import {InputComponent} from './input.component';
import {SharedService} from '../shared.service';

describe('InputComponent', () => {
  let event = {
    target: {
      value: 'test message'
    }
  };

  let component: InputComponent;
  let service: SharedService;

  beforeEach(() => {
    service = new SharedService();
    component = new InputComponent(service);
  })

  it('should create the input', () => {
    expect(component).toBeTruthy();
  })
  it('should set inputs property to the value of rawData from SharedService', () => {
    component.ngOnInit();
    expect(component.data).toBe(service.rawData);
  })
  it('should raise change event when inputChange is called', () => {
    let text = ''
    component.change.subscribe(changed => text = changed);

    component.inputChange(event);

    expect(text).toBe('test message');
  })
});
