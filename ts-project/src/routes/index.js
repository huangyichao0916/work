import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

const Course = lazy(() => import('@/pages/course/Course'))
const Discover = lazy(() => import('@/pages/discover/Discover'))
const Mine = lazy(() => import('@/pages/mine/Mine'))
const Study = lazy(() => import('@/pages/study/Study'))
const App = lazy(() => import('@/App'))
const Account = lazy(() => import('@/pages/account/Account'))
const Home = lazy(() => import('@/pages/home/Home'))
const Lesson = lazy(() => import('@/pages/course/lesson/Lessons'))
const LessonEveryday = lazy(() => import('@/pages/course/lessonEveryday/LessonEveryday'))
const PracticeCamp = lazy(() => import('@/pages/course/practiceCamp/PracticeCamp'))
const RechargeRecord = lazy(() => import('@/pages/rechargeRecord/RechargeRecord'))


const routes = [
    {
        path: '/',
        // exact: true,
        component: SuspenseComponent(App),
        routes: [
            {
                path: '/',
                exact: true,
                render: () => <Redirect to='/home' />
            },
            {
                path: '/home',
                // exact: true,
                component: SuspenseComponent(Home),
                routes: [
                    {
                        path: '/home',
                        exact: true,
                        render: () => <Redirect to='/home/discover' />
                    },
                    {
                        path: '/home/discover',
                        component: SuspenseComponent(Discover),
                    },
                    {
                        path: '/home/course',
                        // exact: true,
                        component: SuspenseComponent(Course),
                        routes: [
                            {
                                path: '/home/course',
                                exact: true,
                                render: () => <Redirect to='/home/course/lesson' />
                            },
                            {
                                path: '/home/course/lesson',
                                component: SuspenseComponent(Lesson),
                            },
                            {
                                path: '/home/course/practiceCamp',
                                component: SuspenseComponent(PracticeCamp),
                            },
                            {
                                path: '/home/course/lessonEveryday',
                                component: SuspenseComponent(LessonEveryday),
                            },
                        ]
                    },
                    {
                        path: '/home/mine',
                        component: SuspenseComponent(Mine),
                    },
                    {
                        path: '/home/study',
                        component: SuspenseComponent(Study),
                    }
                ]
            },
            {
                path: '/account',
                // exact: true,
                component: SuspenseComponent(Account),
            },
            {
                path: '/rechargeRecord',
                component: SuspenseComponent(RechargeRecord),
            }

        ]
    },

]

export default routes;