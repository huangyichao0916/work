import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

const Course = lazy(() => import('@/pages/course'))
const Discover = lazy(() => import('@/pages/discover'))
const Mine = lazy(() => import('@/pages/mine'))
const Study = lazy(() => import('@/pages/study'))
const App = lazy(() => import('@/App'))
const Account = lazy(() => import('@/pages/account'))
const Home = lazy(() => import('@/pages/home'))
const Lesson = lazy(() => import('@/pages/course/lesson'))
const LessonEveryday = lazy(() => import('@/pages/course/lessonEveryday'))
const PracticeCamp = lazy(() => import('@/pages/course/practiceCamp'))
const RechargeRecord = lazy(() => import('@/pages/rechargeRecord'))
const AllDiscoverLessonEveryday = lazy(() => import('@/pages/allDiscoverLessonEveryday'))
const allDiscoverTotalChoiceness = lazy(() => import('@/pages/allDiscoverTotalChoiceness'))


const routes = [
    {
        path: '/',
        component: SuspenseComponent(App),
        routes: [
            {
                path: '/',
                exact: true,
                render: () => <Redirect to='/home' />
            },
            {
                path: '/home',
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
                component: SuspenseComponent(Account),
            },
            {
                path: '/rechargeRecord',
                component: SuspenseComponent(RechargeRecord),
            },
            {
                path: '/allDiscoverLessonEveryday',
                component: SuspenseComponent(AllDiscoverLessonEveryday),
            },
            {
                path: '/allDiscoverTotalChoiceness',
                component: SuspenseComponent(allDiscoverTotalChoiceness),
            }
        ]
    },

]

export default routes;