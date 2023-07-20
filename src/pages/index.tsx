
import * as Tabs from '@radix-ui/react-tabs'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useState } from 'react'

import { TodoList } from '@/client/components/TodoList'
import { CreateTodoForm } from '@/client/components/CreateTodoForm'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)
  const [selectedIndex, setSelectedIndex] = useState('tab1')
  const activeStyle =
    'TabsTrigger rounded-full border-2 border-solid  border-gray-200 px-6 py-3 bg-gray-700 text-white'
  const disableStyle =
    'TabsTrigger rounded-full border-2 border-solid  border-gray-200 px-6 py-3'
  const handleTabChange = (index: string) => {
    // Update the selectedIndex when a tab is checked
    setSelectedIndex(index)
  }

  return (
    <main className="mx-auto w-[480px] pt-12" ref={parent}>
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <div className="pt-10">
          <Tabs.Root
            className="TabsRoot"
            defaultValue="tab1"
            value={selectedIndex}
            onValueChange={handleTabChange}
          >
            <Tabs.List className="TabsList flex gap-x-2">
              <Tabs.Trigger
                className={
                  selectedIndex === 'tab1' ? activeStyle : disableStyle
                }
                value="tab1"
                onClick={() => enableAnimations(true)}
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger
                className={
                  selectedIndex === 'tab2' ? activeStyle : disableStyle
                }
                value="tab2"
              >
                Pending
              </Tabs.Trigger>
              <Tabs.Trigger
                className={
                  selectedIndex === 'tab3' ? activeStyle : disableStyle
                }
                value="tab3"
                onClick={() => enableAnimations(true)}
              >
                Completed
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content className="TabsContent pt-10" value="tab1">
              <TodoList condition={['completed', 'pending']} />
            </Tabs.Content>
            <Tabs.Content className="TabsContent pt-10" value="tab2">
              <TodoList condition={['pending']} />
            </Tabs.Content>
            <Tabs.Content className="TabsContent pt-10" value="tab3">
              <TodoList condition={['completed']} />
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
