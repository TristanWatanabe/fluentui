// import * as React from 'react';
// import Screener from 'screener-storybook/src/screener';
// import { storiesOf } from '@storybook/react';
// import { TextField } from '@fluentui/react';
// import { within, userEvent } from '@storybook/testing-library';

// storiesOf('TextField', module)
//   .addDecorator(story => (
//     <Screener
//       steps={new Screener.Steps()
//         .snapshot('default')
//         .click('.ms-TextField-field')
//         .snapshot('click')
//         .end()}
//     >
//       {story()}
//     </Screener>
//   ))
//   .add('Placeholder 301	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 302	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 303	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 304	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 305	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 306	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 307	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 308	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 309	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 310	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 311	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 312	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 313	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 314	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 315	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 316	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 317	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 318	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 319	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 320	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 321	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 322	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 323	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 324	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 325	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 326	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 327	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 328	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 329	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 330	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 331	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 332	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 333	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 334	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 335	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 336	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 337	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 338	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 339	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 340	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 341	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 342	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 343	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 344	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 345	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 346	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 347	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 348	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 349	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 350	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 351	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 352	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 353	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 354	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 355	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 356	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 357	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 358	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 359	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 360	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 361	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 362	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 363	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 364	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 365	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 366	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 367	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 368	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 369	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 370	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 371	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 372	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 373	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 374	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 375	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 376	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 377	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 378	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 379	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 380	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 381	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 382	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 383	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 384	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 385	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 386	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 387	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 388	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 389	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 390	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 391	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 392	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 393	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 394	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 395	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 396	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 397	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 398	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 399	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 400	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 401	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 402	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 403	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 404	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 405	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 406	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 407	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 408	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 409	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 410	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 411	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 412	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 413	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 414	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 415	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 416	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 417	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 418	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 419	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 420	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 421	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 422	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 423	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 424	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 425	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 426	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 427	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 428	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 429	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 430	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 431	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 432	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 433	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 434	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 435	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 436	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 437	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 438	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 439	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 440	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 441	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 442	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 443	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 444	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 445	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 446	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 447	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 448	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 449	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 450	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 451	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 452	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 453	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 454	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 455	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 456	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 457	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 458	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 459	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 460	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 461	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 462	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 463	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 464	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 465	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 466	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 467	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 468	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 469	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 470	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 471	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 472	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 473	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 474	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 475	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 476	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 477	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 478	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 479	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 480	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 481	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 482	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 483	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 484	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 485	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 486	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 487	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 488	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 489	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 490	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 491	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 492	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 493	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 494	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 495	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 496	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 497	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 498	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 499	', () => <TextField label="Standard" placeholder="Placeholder" />)
//   .add('Placeholder 500	', () => <TextField label="Standard" placeholder="Placeholder" />);

// export default {
//   component: TextField,
// };

// const TextFieldTemplate = () => <TextField label="Standard" placeholder="Placeholder" />;

// export const TextFieldPlaceholder1 = {
//   render: TextFieldTemplate,
// };

// export const TextFieldPlaceholderClicked1 = {
//   render: TextFieldTemplate,
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const input = canvas.getByRole('textbox');
//     await userEvent.click(input);
//   },
// };
