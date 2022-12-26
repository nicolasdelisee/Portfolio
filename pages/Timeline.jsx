import React from 'react';
import "./Timeline.scss";


const Timeline = () => {
    return (
        <div>
            <ul id='timeline'>
                <li class='work'>
                    <input class='radio' id='work5' name='works' type='radio' checked />
                        <div class="relative">
                            <label for='work5'>Lorem ipsum dolor sit amet</label>
                            <span class='date'>12 May 2013</span>
                            <span class='circle'></span>
                        </div>
                        <div class='content'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus dicta qui est optio rerum.
                            </p>
                        </div>
                </li>
                <li class='work'>
                    <input class='radio' id='work3' name='works' type='radio' />
                        <div class="relative">
                            <label for='work3'>Lorem ipsum dolor sit amet</label>
                            <span class='date'>10 May 2013</span>
                            <span class='circle'></span>
                        </div>
                        <div class='content'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus dicta qui est optio rerum.
                            </p>
                        </div>
                </li>
            </ul>
        </div>
    );
}

export default Timeline;
