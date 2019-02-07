import React from 'react'

import './App.css';
const Box =()=>{
    return( <div className='box-container'>
    <ul class="ch-grid">
	<li>
		<div class="ch-item ch-img-1">
			<div class="ch-info">
				<h3>Why Do You</h3>
				<p><a href="#">SEE MORE</a></p>
			</div>
		</div>
	</li>
	<li>
		<div class="ch-item ch-img-2">
			<div class="ch-info">
				<h3>  Have To Clean ?</h3>
				<p> <a href="#">SEE MORE</a></p>
			</div>
		</div>
	</li>
	<li>
		<div class="ch-item ch-img-3">
			<div class="ch-info">
				<h3>The Cleaner Comes For You</h3>
				<p> <a href="#">SEE MORE</a></p>
			</div>
		</div>
	</li>
</ul>

    </div>

    )
}
export default Box ;