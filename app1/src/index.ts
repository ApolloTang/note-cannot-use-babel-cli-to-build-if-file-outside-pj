
import foo from './foo'
import outside from '../outside1'
import outside2 from '../../outside2'
import fooIgnore from './foo.ignore'

console.log('src/index.ts is running')

foo()
// fooIgnore()
outside()
outside2()


